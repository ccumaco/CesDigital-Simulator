// class Subject {
//     constructor () {
//         this.observers = []
//     }

//     subscribe (observer) {
//         this.observers.push(observer)
//     }

//     unsbscribe (observer) {
//         this.observers = this.observers.filter(obs => obs !== observer)
//     }

//     notify (model) {
//         this.observers.forEach(observer => observer.notify(model))
//     }
// }


// class TextObject extends Subject {
//     constructor(){
//         super()
//         this.text = ''
//     }

//     notify (text) {
//         this.text = text
//         super.notify(this)
//         console.log(this, 'esto es this');
//     }
// }

// class Div1Observer {
//     notify(subject){
//         document.querySelector('#div1').innerHTML = subject.text
//     }
// }

// var textSubject = new TextObject()
// let miDiv1  = new Div1Observer()
// textSubject.subscribe(miDiv1)



// function updatePrice(){
//     textSubject.notify('algooo')
//     console.log(textSubject, 'esto es textSubject');
//     console.log(miDiv1, 'esto es miDiv1');
//     console.log(textSubject.subscribe(miDiv1), 'esto es textSubject.subscribe');
// }
