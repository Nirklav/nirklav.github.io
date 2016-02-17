var searchIndex = {};
searchIndex['task_queue'] = {"items":[[0,"","task_queue","Task queue\nThe implementation of the thread pool for Rust.",null,null],[3,"TaskQueue","","",null,null],[3,"Task","","",null,null],[0,"error","","TaskQueue error.",null,null],[4,"TaskQueueError","task_queue::error","",null,null],[13,"Io","","",0,null],[11,"fmt","","",0,{"inputs":[{"name":"taskqueueerror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",0,{"inputs":[{"name":"taskqueueerror"}],"output":{"name":"str"}}],[11,"cause","","",0,{"inputs":[{"name":"taskqueueerror"}],"output":{"name":"option"}}],[11,"fmt","","",0,{"inputs":[{"name":"taskqueueerror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from","","",0,{"inputs":[{"name":"taskqueueerror"},{"name":"error"}],"output":{"name":"taskqueueerror"}}],[0,"spawn_policy","task_queue","Trait that controls the number of threads.",null,null],[3,"StaticSpawnPolicy","task_queue::spawn_policy","",null,null],[8,"SpawnPolicy","","",null,null],[10,"get_count","","Returns current number of threads.",1,{"inputs":[{"name":"spawnpolicy"},{"name":"taskqueue"}],"output":{"name":"usize"}}],[11,"new","","",2,{"inputs":[{"name":"staticspawnpolicy"}],"output":{"name":"staticspawnpolicy"}}],[11,"get_count","","",2,{"inputs":[{"name":"staticspawnpolicy"},{"name":"taskqueue"}],"output":{"name":"usize"}}],[11,"new","task_queue","Create new task queue with 10 threads",3,{"inputs":[{"name":"taskqueue"}],"output":{"name":"taskqueue"}}],[11,"with_threads","","Create new task quque with selected threads count",3,{"inputs":[{"name":"taskqueue"},{"name":"usize"},{"name":"usize"}],"output":{"name":"taskqueue"}}],[11,"enqueue","","Schedule task in queue\n# Example\n``` rust\nextern crate task_queue;",3,{"inputs":[{"name":"taskqueue"},{"name":"f"}],"output":{"name":"result"}}],[11,"stop","","Stops tasks queue work.\nAll task in queue will be completed by threads.\nMethod not block current thread work, but returns threads joinHandles.",3,{"inputs":[{"name":"taskqueue"}],"output":{"name":"vec"}}],[11,"stop_wait","","Stops tasks queue work.\nAll task in queue will be completed by threads.\nMethod block current thread work.",3,{"inputs":[{"name":"taskqueue"}],"output":null}],[11,"stop_immediately","","Stops tasks queue work immediately and return are not completed tasks\nStops tasks queue work.\n# Examples\n``` rust\nextern crate task_queue;",3,{"inputs":[{"name":"taskqueue"}],"output":{"name":"vec"}}],[11,"get_threads_count","","Returns current threads count",3,{"inputs":[{"name":"taskqueue"}],"output":{"name":"usize"}}],[11,"get_max_threads","","Return max threads count",3,{"inputs":[{"name":"taskqueue"}],"output":{"name":"usize"}}],[11,"get_min_threads","","Return min threads count",3,{"inputs":[{"name":"taskqueue"}],"output":{"name":"usize"}}],[11,"set_spawn_policy","","Sets a policy for controlling the amount of threads",3,{"inputs":[{"name":"taskqueue"},{"name":"box"}],"output":null}],[11,"tasks_count","","Gets tasks count in queue",3,{"inputs":[{"name":"taskqueue"}],"output":{"name":"usize"}}],[11,"drop","","All task in queue will be completed by threads.",3,{"inputs":[{"name":"taskqueue"}],"output":null}],[11,"run","","",4,{"inputs":[{"name":"task"}],"output":null}]],"paths":[[4,"TaskQueueError"],[8,"SpawnPolicy"],[3,"StaticSpawnPolicy"],[3,"TaskQueue"],[3,"Task"]]};
initSearch(searchIndex);
