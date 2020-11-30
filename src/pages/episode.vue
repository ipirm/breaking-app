<template>
	<div class="jumbotron">
		<h1 class="display-3">{{ episode.title }}</h1>
		<p class="lead">
			Season: {{ episode.season }}, Episode {{ episode.episode }} , Serie:
			{{ episode.series }}
		</p>
		<hr class="my-4" />
		<p>Realese date: {{ episode.air_date }}</p>
		<p>Death count: {{ deathCount }}</p>
		<p>Characters:</p>
		<div class="list-group">
			<router-link
				to="/"
				v-for="item in episode.characters"
				:key="item"
				class="list-group-item list-group-item-action active"
			>
				{{ item }}
			</router-link>
		</div>
		<p class="lead mt-5">
			<a
				class="btn btn-primary btn-lg"
				href="#"
				role="button"
				@click.prevent="$router.go(-1)"
				>Назад</a
			>
		</p>
	</div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
	name: "Episode",
	created() {
		this.getEpisode(this.$route.params.id);
		this.getDeathCount(this.$route.params.id);
	},
	methods: {
		...mapActions("episode", ["getEpisode", "getDeathCount"])
	},
	computed: {
		...mapState("episode", ["episode", "deathCount"])
	}
};
</script>
