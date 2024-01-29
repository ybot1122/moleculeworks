<template>
  <v-container>
    <ProductCategory
      title="MemXcel unit using transparent polycarbonate body"
      subtitle="Model: MX-1-PC"
    />
    <ProductCategory
      title="MemXcel unit using stainless-steel body"
      subtitle="Model: MX-1-SS"
    />
    <ProductCategory
      title="MoleculeWorks thin porous metal sheet membrane for micro- and ultra-filtration; MoleculeWorks thin porous metal sheet as membrane support"
      subtitle="Porous Ni alloy (95-99% Ni) sheet, thickness  40- 50µm"
    />
    <ProductCategory
      title="MoleculeWorks thin A-type zeolite membrane sheet"
      subtitle="Membrane thickness <10µm; Overall sheet thickness 40-60µm"
    />
    <ProductCategory
      title="MoleculeWorks hydrophobic membrane sheet"
      subtitle="Polytetrafluoroethylene (PTFE) coated on porous Ni sheet surface; PTFE coating: thickness <10µm, not wettable by water; yttria-stabilized zirconia (YSZ) coating: thickness < 10µm, wettable by water"
    />
    <ProductCategory
      title="MoleculeWorks thin porous ceramic/metal sheet separator"
      subtitle="yittria-stabilized zirconia (YSZ) particles on porous Ni sheet: Ceramic coating thickness = 10-15µm; Overall sheet thickness = 50-60µm"
    />
    <ProductCategory
      title="Part list for Membrane Encapsulated Planar Adsorbent (MEPA) plate"
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
