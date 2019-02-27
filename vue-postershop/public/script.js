const PRICE = 9.99;
const LOAD_NUM = 10;

new Vue({
  el: '#app',
  data: {
    total: 0,
    items: [],
    results: [],
    cart: [],
    newSearch: 'anime',
    lastSearch: '',
    loading: false,
    price: PRICE
  },
  computed: {
    noMoreItems: function() {
      return (
        this.items.length === this.results.length && this.results.length > 0
      );
    }
  },
  methods: {
    appendItems: function() {
      if (this.items.length < this.results.length) {
        const append = this.results.slice(
          this.items.length,
          this.items.length + LOAD_NUM
        );
        this.items = this.items.concat(append);
      }
    },
    addItem: function(index) {
      this.total += PRICE;
      const item = this.items[index];
      let found = false;

      for (let i = 0; i < this.cart.length; i++) {
        if (this.cart[i].id === item.id) {
          found = true;
          this.cart[i].qty++;
          break;
        }
      }

      if (!found) {
        this.cart.push({
          id: item.id,
          title: item.title,
          qty: 1,
          price: PRICE
        });
      }
    },
    inc: function(item) {
      item.qty++;
      this.total += PRICE;
    },
    dec: function(item) {
      item.qty--;
      this.total -= PRICE;
      if (item.qty <= 0) {
        for (var i = 0; i < this.cart.length; i++) {
          if (this.cart[i].id === item.id) {
            this.cart.splice(i, 1);
            break;
          }
        }
      }
    },
    onSubmit: function() {
      if (this.newSearch) {
        this.items = [];
        this.loading = true;
        this.$http.get(`/search/${this.newSearch}`).then(
          response => {
            this.results = response.data;
            this.items = response.data.slice(0, LOAD_NUM);
            this.lastSearch = this.newSearch;
            this.loading = false;
          },
          response => {
            this.loading = false;
            console.warn(response);
          }
        );
      }
    }
  },
  filters: {
    currency: function(price) {
      return '$'.concat(price.toFixed(2));
    }
  },
  mounted: function() {
    this.onSubmit();

    const elem = document.getElementById('product-list-bottom');
    const watcher = scrollMonitor.create(elem);
    watcher.enterViewport(() => {
      this.appendItems();
    });
  }
});
