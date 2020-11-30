<template>
	<div class="card mb-3 ml-4">
		<router-link :to="{ name: 'episode', params: { id: item.episode_id } }">
			<h3 class="card-header">{{ item.title }}</h3>
			<div class="card-body">
				<h5 class="card-title">Release date: {{ item.air_date }}</h5>
				<h6 class="card-subtitle text-muted">
					Season: {{ item.season }},Episode {{ item.episode }},Serie:
					{{ item.series }}
				</h6>
			</div>
		</router-link>
		<div class="card-body">
			<p class="card-text">Characters</p>
		</div>
		<ul class="list-group list-group-flush">
			<li class="list-group-item" v-for="i in item.characters" :key="i">
				<router-link :to="{ name: 'character', params: { id: i } }">
					{{ i }}
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	props: ["item"],
	name: "Card"
};
</script>

<style scoped lang="scss">
.card {
	width: 40% !important;
}
</style>
