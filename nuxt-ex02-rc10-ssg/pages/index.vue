<template>
  <div>
    <h1>Nuxt 3で作られたサイト</h1>

    <h2>assetsの参照</h2>

    <p>画像ファイル等のassetsは、root/public/または、root/assets/配下にファイルを配置し、次のように記述することでページから参照可能になる。</p>
    <dl>
      <dt>root/public/images/sample1.jpg</dt>
      <dd>=> src="/images/sample1.jpg"</dd>
      <dt>root/assets/images/sample2.jpg</dt>
      <dd>=> src="~/assets/images/sample2.jpg"</dd>
    </dl>

    <fieldset>
      <legend>Sample</legend>
      <img src="/images/sample1.jpg"/>
      <img src="~/assets/images/sample2.jpg"/>
    </fieldset>
  </div>
</template>


<style scoped>
img {
  width: 200px;
  height: 200px;
}

fieldset {
  border: solid 1px gray;
  padding: 20px;
}
legend {
  padding: 0 20px;
}
</style>
