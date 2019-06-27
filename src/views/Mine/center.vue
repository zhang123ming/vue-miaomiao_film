<template>
    <div>
        <div>个人中心：</div>
        <div>当前用户：123 <a href="javascript:;" >退出</a></div>
        <div>用户身份：管理员 <a href="/admin" target="_blank">进入管理后台</a></div>
        <!-- <div v-else>用户身份：普通会员</div> -->
        <div>
            <!-- <input type="file" name="file" value="上传头像" @change="handleToUpload"> -->
            <!-- <img class="userHead" :src="$store.state.user.userHead"> -->
        </div>
    </div>
</template>

<script>


export default {
    name : 'center',
   

}
</script>

<style scoped>
.userHead{ width:100px; height:100px; border-radius: 50%; overflow: hidden;}
</style>
