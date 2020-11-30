<template>
	<div class="container main_page">
		<div class="row justify-content-center my-5 mx-5">
			<input
				class="form-control form-control-lg"
				type="text"
				placeholder="search"
				v-model="search"
			/>
		</div>
		<div class="row">
			<div class="col-lg-3">
				<div class="list-group">
					<!-- В API есть ошибка есть сезон *1* и с пробелом * 1 * поэтому поставил v-if -->
					<router-link
						class="list-group-item list-group-item-action active"
						:to="{ query: {} }"
						>All
					</router-link>
					<router-link
						class="list-group-item list-group-item-action active"
						v-for="item in seasons"
						:key="item"
						v-if="item !== ' 1'"
						:to="{ query: { season: item } }"
					>
						Season {{ item }}
					</router-link>
				</div>
			</div>
			<div class="col-lg-9">
				<div class="cards_overlay">
					<Card
						v-for="item in filtredEpisodes"
						:key="item.episode_id"
						:item="item"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Card from "@/components/pages/Card.vue";
import { mapActions, mapState } from "vuex";

export default {
	components: {
		Card
	},
	data() {
		return {
			search: ""
		};
	},
	created() {
		this.getAllEpisodes();
	},
	methods: {
		...mapActions("episode", ["getAllEpisodes"])
	},
	watch: {
		"$route.query.season": {
			immediate: true,
			handler(season) {
				this.getAllEpisodes(season);
			}
		}
	},
	computed: {
		...mapState("episode", ["episodes"]),
		seasons() {
			return [...new Set(this.episodes.map(i => i.season))];
		},
		filtredEpisodes() {
			if (this.$route.query.season)
				return this.episodes.filter(i => i.season === this.$route.query.season);

			return this.episodes.filter(i => {
				return i.title.toLowerCase().includes(this.search.toLowerCase());
			});
		}
	}
};
</script>
