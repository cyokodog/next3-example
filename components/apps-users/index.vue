<template>

  <div v-if="error">
    <p>Web APIの実行でエラーが発生しました。</p>
    <button @click="() => retry({hasError:false})">エラーを解決して再実行する</button>
  </div>
  <div v-else>
    <input v-model="userFilter"/>{{userFilter}}
    <div class="users-contents">
      <ul>
        <li v-for="user in filteredUsers" :key="user.id">
          <label><input type="radio" v-model="selectedUserId" :value="user.id"/>
          {{user.id}}
          {{user.name}}</label>
        </li>
      </ul>
      <div>
        <apps-users-user
          v-if="selectedUserId"
          :user-id="selectedUserId"
        />
      </div>
    </div>
    <div>
      <button @click="retry">
        <template v-if="pending">データ取得中</template>
        <template v-else>データ再取得</template>
      </button>

      <button @click="() => retry({hasError:true})">
        <template v-if="pending">データ取得中</template>
        <template v-else>データ再取得（エラー発生させる）</template>
      </button>
    </div>
  </div>

  <h3>status</h3>
  <dl>
    <dt>pending</dt>
    <dd>{{pending}}</dd>
    <dt>error</dt>
    <dd>{{error}}</dd>
  </dl>
</template>

<style scoped>
.users-contents {
  display: flex;
  gap:50px;
}
.users-contents > *:first-child {
  min-width: 300px;
}
ul {
  padding: 0;
}
li {
  list-style: none;
}

</style>

<script src="./main.ts"></script>
