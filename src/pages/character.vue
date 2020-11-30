<template>
	<div class="jumbotron">
		<h1 class="display-3">Name: {{ character.name }}</h1>
		<p class="lead">Birthday: {{ character.birthday }}</p>
		<hr class="my-4" />
		<div class="row">
			<div class="col-6">
				<img class="img-fluid" :src="character.img" />
			</div>
			<div class="col-6">
				<p>Occupation:</p>
				<ul class="list-group list-group-flush">
					<li
						class="list-group-item"
						v-for="item in character.occupation"
						:key="item"
					>
						{{ item }}
					</li>
					<li class="list-group-item">Status : {{ character.status }}</li>
					<li class="list-group-item">NickName: {{ character.nickname }}</li>
					<li class="list-group-item">Death Count: {{ deathCount }}</li>
				</ul>
				<p>Seasons:</p>
				<ul class="list-group list-group-flush">
					<li
						class="list-group-item"
						v-for="item in character.appearance"
						:key="item"
					>
						Season: {{ item }}
					</li>
				</ul>
				<p>Portrayed: {{ character.portrayed }}</p>
				<p>Seria: {{ character.category }}</p>
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
		</div>
	</div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
	name: "Character",
	created() {
		this.getCharacter(this.$route.params.id);
		this.getDeathCount(this.$route.params.id);
	},
	methods: {
		...mapActions("character", ["getCharacter", "getDeathCount"])
	},
	computed: {
		...mapState("character", ["character", "deathCount"])
	}
};
</script>
