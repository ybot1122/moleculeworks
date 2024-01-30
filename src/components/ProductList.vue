<template>
  <v-container>
    <ProductCategory
      v-bind:onQuantityChange="updateCart"
      v-bind:title="['MemXcel unit using transparent polycarbonate body']"
      v-bind:subtitle="['Model: MX-1-PC']"
      v-bind:items="[
        {no: 'MX-1-PC-kit', partName: 'Set', material: 'All the parts listed needed', specification: 'All the parts listed below, plus i) two porous Nickel membrane sheets, ii) two NaA zeolite/metal sheet zeolite membranes; iii) one additional inner and outer gaskets', partPrice: 699},
        {no: 'MX-1-PC-1', partName: 'Front (feed) plate', material: 'Polycarbonate', specification: '80 mm x 140 mm x10mm', partPrice: 250}
      ]"
    />
    <ProductCategory
      v-bind:title="['MemXcel unit using stainless-steel body']"
      v-bind:subtitle="['Model: MX-1-SS']"
    />
    <ProductCategory
      v-bind:title="['MoleculeWorks thin porous metal sheet membrane for micro- and ultra-filtration',
        'MoleculeWorks thin porous metal sheet as membrane support']"
      v-bind:subtitl="['Porous Ni alloy (95-99% Ni) sheet, thickness  40- 50µm']"
    />
    <ProductCategory
      v-bind:title="['MoleculeWorks thin A-type zeolite membrane sheet']"
      v-bind:subtitle="['Membrane thickness <10µm', 'Overall sheet thickness 40-60µm']"
    />
    <ProductCategory
      v-bind:title="['MoleculeWorks hydrophobic membrane sheet']"
      v-bind:subtitle="['Polytetrafluoroethylene (PTFE) coated on porous Ni sheet surface',
        'PTFE coating: thickness <10µm, not wettable by water',
        'yttria-stabilized zirconia (YSZ) coating: thickness < 10µm, wettable by water']"
    />
    <ProductCategory
      v-bind:title="['MoleculeWorks thin porous ceramic/metal sheet separator']"
      v-bind:subtitle="['yittria-stabilized zirconia (YSZ) particles on porous Ni sheet:',
        'Ceramic coating thickness = 10-15µm',
        'Overall sheet thickness = 50-60µm']"
    />
    <ProductCategory
      v-bind:title="['Part list for Membrane Encapsulated Planar Adsorbent (MEPA) plate']"
    />
    <div id="cart">
      Your current cart: {{ cart }}
    </div>
    <div>
      <button id="checkout" @click="startCheckout" :disabled="isCartEmpty">Click here to proceed to checkout.</button>
    </div>
</v-container>
</template>

<script>

import ProductCategory from './ProductCategory'

export default {
  name: "ProductList",
  components: {
    ProductCategory,
  },
  props: {
  },
  created: () => {},
  data: () => ({
    cart: {},
    itemNoToApiKey: {
      'MX-1-PC-1': 'price_1Odn8HKVWxESeTWrChhwh8P6',
      'MX-1-PC-kit': 'price_1Odn7XKVWxESeTWrSoPdOGlw',
    }
  }),
  methods: {
    updateCart(itemNo) {
      return (val) => {
        if (val > 0) {
          this.$set(this.cart, itemNo, val)
        } else {
          this.$delete(this.cart, itemNo)
        }
      }
    },

    async startCheckout() {
      const mapped = {}

      for (const [key, value] of Object.entries(this.cart)) {
        mapped[this.itemNoToApiKey[key]] = value;
      }

      const params = new URLSearchParams(mapped);

      const response = await fetch('/.netlify/functions/hello?' + params.toString());
      const stripeUrl = await response.text();

      window.location.href = stripeUrl;
    },

  },
  computed: {
    isCartEmpty() {
      return Object.keys(this.cart).length === 0 && this.cart.constructor === Object
    }
  }
};
</script>
<style scoped>
#checkout {
  border: 1px black solid;
  font-weight: bold;
  text-align: center;
  padding: 5px;
}

#checkout:not(:disabled):hover {
  border-width: 3px;
}
</style>