<template>
       <div class="flex items-center justify-center flex-col mt-8">
        <!-- main card -->
        <div class=" p-10 rounded-xl">
            <!-- headers content-->
            <div class="flex flex-col justify-center items-center text-center mt-[6rem]">
                <h1>
                    Imper<span>ui</span>m
                </h1>
                <div class="max-w-sm font-bold font-sans">
                    The Power of Opinion, The Impact of Knowledge
                </div>
                <div class="font-light max-w-lg mt-5 text-sm">
                    Get inspired, get involved, and make your voice heard on the issues that matter most to you.
                </div>
 
            <div class="h-full w-60 mt-5 flex flex-col"> 
                <button class="rounded-full bg-blue-500 px-5 py-3 text-base mb-3 font-medium text-white transition duration-200 hover:bg-blue-600 active:bg-blue-700">
                    <router-link to="/signup">Get Started</router-link>
                </button> 
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup() {
        name:'hero'
    },
}
</script>
<style>
    h1{
        font-size: 16vw;
    color: #313b44;
    line-height: 1.2;
    font-weight: 900;
    }
    h1>span{
            color: transparent;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #313b44;
    }
</style>