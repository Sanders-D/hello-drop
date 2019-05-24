
var files = new Vue({
			el: '#files',
				data: {
					todos: []
			}
		});
                                        //recuperation de l'element dropper dans la zone de drop par l'id de la balise
var dragFile= document.getElementById("drag-file");
dragFile.addEventListener('drop', function (e) {
      e.preventDefault();
      e.stopPropagation();
                                            // transfer de donné du fichiers puis ajout a l'array
      for ( f of e.dataTransfer.files) {
        console.log('The file(s) you dragged: ', f),
        files.todos.push({ 
            file:  f.path});
        }
        	Vue.component('todo-item', {
          template: '\
            <li>\
              {{ file }}\
              <button v-on:click="$emit(\'remove\')">Delete</button>\
            </li>\
          ',
          props: ['file']
        })
	 });