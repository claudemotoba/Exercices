<template>
    <div>
        <h1>Hello</h1>
        <div style="display: flex; justify-content: space-around">
            <div v-for="student in students" :key="student">
                <p> {{student}} </p>
                <input type="submit" @click='Front_end(student)' value="Front End">
                <input type="submit" @click='Back_end(student)' value="Back End"> 
            </div>
        </div>
        <div  style="display: flex;">
            <ul>
                <h3>Dev frontEnd</h3>
                <li v-for='front in frontEnd' :key='front'> {{front}} </li>
            </ul>
            <ul>
                <h3>Dev BackEnd</h3>
                <li v-for='back in backEnd' :key='back'> {{back}} </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
             user: 'john',
             students: ['claude','camille','jonathan','francois','christian','thesy','semia'],
             frontEnd: [],
             backEnd: []
        }
       
    },
    methods:{
        Front_end:function (student) {
            this.frontEnd.push(student)
        },
        Back_end:function (student) {
            this.backEnd.push(student)
        }
    }
}
</script>