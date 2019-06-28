<template>
  <div class="cinema_body">
    		<Loading v-if="isLoading"></Loading>
    <ul>
      <li v-for="(item,index) in ciList" :key="item.id">
        <div>
          <span>{{item.nm}}</span>
          <span class="q">
            <span class="price">{{item.sellPrice}}</span> 元起
          </span>
        </div>
        <div class="address">
          <span>{{item.addr}}</span>
          <span>{{item.distance}}km</span>
        </div>
        <div class="card">
          <div v-for="(itemCard,key) in item.tag" v-if="itemCard===1" :key="itemCard.key">{{key|formatCard()}}</div>
        
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "clilist",
  data() {
    return {
      ciList:[],//影院信息
      isLoading:true,
      prevId:-1,
		};
  },

  methods: {
		getciLitInfo(){
      var cityId=this.$store.state.city.id;
      if(this.prevId===cityId){
        return;
      }
			this.axios.get("/api/cinemaList?cityId="+cityId).then(res=>{
			
				var msg=res.data.msg;
				if(msg==='ok'){
          this.ciList=res.data.data.cinemas;
          this.prevId=cityId;
          // console.log(this.ciList)
          this.isLoading=false;
				}
				
			})
		}
	}
	,
	filters:{
		formatCard(key){
			var card=[
				{key:'allowRefund',value:'改签'},
					{key:'endorse',value:'退票'},
						{key:'sell',value:'折扣'},
							{key:'snack',value:'小吃'}
				
			];
			for(var i=0;i<card.length;i++){
				if(card[i].key===key){
					return card[i].value;
				}
			}
			return '';
		}
	},
	created(){
		this.getciLitInfo();
	}
};
</script>
<style scoped>
.cinema_body {
margin-top: 50px;
  flex: 1;
  overflow: auto;
}
.cinema_body ul {
  padding: 20px;
}
.cinema_body li {
  border-bottom: 1px solid #e6e6e6;
  margin-bottom: 20px;
}
.cinema_body div {
  margin-bottom: 10px;
}
.cinema_body .q {
  font-size: 11px;
  color: #f03d37;
}
.cinema_body .price {
  font-size: 18px;
}
.cinema_body .address {
  font-size: 13px;
  color: #666;
	width: 100%;
}
.cinema_body .address span:first-child{
display:block;                
width:80%;
word-break:keep-all;           
white-space:nowrap;         
overflow:hidden;              
text-overflow:ellipsis;  
}
.cinema_body .address span:nth-of-type(2) {
  float: right;
}
.cinema_body .card {
  display: flex;
}
.cinema_body .card div {
  padding: 0 3px;
  height: 15px;
  line-height: 15px;
  border-radius: 2px;
  color: #f90;
  border: 1px solid #f90;
  font-size: 13px;
  margin-right: 5px;
}
.cinema_body .card div.or {
  color: #f90;
  border: 1px solid #f90;
}
.cinema_body .card div.bl {
  color: #589daf;
  border: 1px solid #589daf;
}
</style>