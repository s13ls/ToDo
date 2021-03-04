Vue.component('task', {
    props: ['data'],
    methods: {
        task_done() {
            this.$emit('task_done');
        }
    },
    template: `
    
    <div class="task">
    <div>
        <h3 class="task__title">{{data.title}}</h3>
        <p class="task__desc">{{data.desc}}</p>
    </div>
    <button @click="task_done()" class="task__done">Ready</button>
    </div>

    `
})

const vm = new Vue({
    el: '#app',
    data: {
        new_task: {
            title:'',
            desc: ''
        },
        tasks: [
        ],
        show: true
    },
    mounted () {
        if(localStorage.getItem('tasks')) {
            try {
              this.tasks = JSON.parse(localStorage.getItem('tasks'));
            } catch(e) {
              localStorage.removeItem('tasks');
            }
          }
    },
    methods: {
        saveTasks() {
            let parsed = JSON.stringify(this.tasks);
            localStorage.setItem('tasks', parsed);
        },
        delete_task(id) {
            this.tasks.splice(id, 1);
            this.saveTasks();
        },
        add_task() {
 
            if(this.new_task.title!='') {
                this.tasks.push({
                    title: this.new_task.title,
                    desc: this.new_task.desc,
                    
                    
                });
                this.new_task.title='';
                this.new_task.desc='';
                this.saveTasks();
                }
            },
            
        }

        
    
})
