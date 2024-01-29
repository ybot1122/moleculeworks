<template>
  <v-container>
    <ProductCategory
      v-bind:title="['MemXcel unit using transparent polycarbonate body']"
      v-bind:subtitle="['Model: MX-1-PC']"
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
  data: () => ({})
};
</script>
