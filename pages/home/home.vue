<template>
	<view>
		<view class="serch">
			<text>天使童装</text>
			<view >
				
			<uni-search-bar class="sea"></uni-search-bar>
			</view>
		</view>
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" style="margin-bottom: 10px;">
			<swiper-item v-for="(item,index) in banner" :key="index">
				<view class="swiper-item">
					<image :src="item.picUrl" mode="" style="width: 100%; height: 300px;"></image>
				</view>
			</swiper-item>
		
		</swiper>
		<view class="ddd">
			<view class="">
				<view>优惠<big>资讯</big>，<span>优惠多多，戳戳戳我看详情</span></view>
				
			</view>
			<text>></text>
		</view>
		<view class="middle">
			<uni-icons type="fire-filled" color="red" size="25"></uni-icons>
			<text>爆品推荐</text>
		</view>
		<view class="list_box">
			<view class="list_top" v-for="(item,index) in list" :key="index">
				<image :src="item.pic" mode=""></image>
				<text>{{item.name}}</text><br>
				<text>{{item.subName}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			     banner:[],
				 list:[]
			};
		},
		mounted() {
			this.getBanner()
			this.getList()
		},
		methods: {
			async getBanner(){
				let {data:res}=await uni.$http.get('/hjl/banner/list')
				console.log(res); 
			
				this.banner=res.data
			   
				
			},
			async getList(){
				let {data:res}=await uni.$http.post('/hjl/shop/goods/list/v2')
				console.log(res);
				this.list=res.data.result
			}
		}
	}
</script>

<style lang="scss">
	.ddd{
		width: 100%;
		height: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 10px 10px;
		big{
			color: orange;
			font-weight: 900;
		}
		span{
			color: orangered;
		}
	}
	.middle{
		width: 100%;
		height: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
		text{
			font-weight: 900;
		}
	}
	.list_box{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: center;
		.list_top{
			width: 48%;
			image{
				width: 100%;
			}
		}
		
	}
	.serch{
		width: 100%;
		height: 50px;
		display: flex;
		justify-content: space-around;
		align-items: center;
		background-color: aqua;
		text{
			width: 25%;
		}
		.sea{
			width: 75%;
		}
	}
</style>
