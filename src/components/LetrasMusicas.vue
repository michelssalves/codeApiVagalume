<template>
  <div>
    <b-card>
      <select class="menuSelect" @change="getOption($event)" v-model="art">
        <option value="">Selecione</option>
        <option v-for="banda in bandas" :key="banda.id" :value="banda.id">{{ banda.nome }}</option>
      </select>
      <select class="menuSelect" v-model="mus">
        <option value="">Selecione</option>
        <option selected v-for="musica in filteredItems" :key="musica.idBanda" :value="musica.nome">{{ musica.nome }}
        </option>
      </select>
    </b-card>
    <b-card>
      <textarea v-model="musica" class="textAreaclass" name="observacao" cols="40" rows="30">

      </textarea>
    </b-card>
  </div>
</template>
<script>
export default {
  name: 'LetrasMusicas',
  props: {
  },
  data() {
    return {
      key: '3e83e523ef18a449f4eed36e9291ceae',
      bandas: [
        { id: 0, nome: 'oficina-g3' },
        { id: 1, nome: 'resgate' },
        { id: 2, nome: 'aline-barros' },
      ],
      musicas: [
        { id: 0, idBanda: 0, nome: 'a ele' },
        { id: 1, idBanda: 1, nome: 'todo som' },
        { id: 2, idBanda: 2, nome: 'Ressuscita-me' },
        { id: 3, idBanda: 2, nome: 'Santidade' },
        { id: 4, idBanda: 2, nome: 'Consagração' },
        { id: 5, idBanda: 2, nome: 'corpo-e-familia' },
        { id: 6, idBanda: 2, nome: 'Casa do Pai' },
        { id: 7, idBanda: 2, nome: 'Vitória no Deserto' },
        { id: 8, idBanda: 2, nome: 'Ao único' },
        { id: 9, idBanda: 2, nome: 'Poder Pra Salvar' },
        { id: 10, idBanda: 2, nome: 'Aclame Ao Senhor' },
        { id: 11, idBanda: 2, nome: 'Águas do Trono' },
        { id: 12, idBanda: 2, nome: 'Caminho de Milagres' },
      ],
      art: '',
      artista: '',
      mus: '',
      musica: '',

    }
  },
  computed: {

    filteredItems() {

      return this.musicas.filter(item => item.idBanda === this.art)

    }

  },
  methods: {
    getOption(event) {
      const selectedOptionIndex = event.target.options.selectedIndex
      this.artista = event.target.options[selectedOptionIndex].text
    },
    getLetras() {
        if(this.artista && this.mus){
          this.$http.get(`apikey=${this.key}&art=${this.artista}&mus=${this.mus}`)
          // eslint-disable-next-line
          .then((res) => {this.musica = (res.data.mus[0]['text'])})
          .catch((err) => {console.log(err)})
        }
    },

  },
  watch: {
    mus() {
      this.getLetras()
    },
    art() {
      this.getLetras()
    },
  },
  mounted() {

    this.getLetras()

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.textAreaclass {
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  font-size: 0.9rem;
  padding: auto;
}

.menuSelect {

  text-transform: uppercase;
  margin: 4px;
  border: 2px solid;
  border-radius: 15px;
  text-align: center;
  padding: 3px;

}
</style>
