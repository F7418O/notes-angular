import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  
  notes = [{
    id: '0',
    title: 'Comer sano',
    text: 'cereal con yogurt y waffles',
    color: '#ddffc2'
  },{
    id: '1',
    title: 'Workout',
    text: 'benchs',
    color: '#ffeac2'
  }]

  copyNotes = [...this.notes]

 public constructor(){
 }

generateColor(){
   const colors = ['linear-gradient(#63aae6, #8198e5)','linear-gradient(#64cce6, #9198e5)',
   'linear-gradient(#74cce6, #ffeac2)','linear-gradient(#84cce6, #9197e5)',
   'linear-gradient(#ffeac2, #3198e5)']
    const index = Math.floor(Math.random() * colors.length)
   return colors[index]
 }

 handleNew(){
   const color = this.generateColor()
   const note = {
     id: this.notes.length.toString(),
     title: '',
     text: '',
     color: color
   }

   this.notes = [note, ...this.notes]
   this.copyNotes = [...this.notes]
 }

 handleColor(id: any){
  const index = this.notes.findIndex(n => n.id === id)
  this.notes[index].color = this.generateColor()
  this.copyNotes = [... this.notes]
 }

 handleRemove(id: any){
  const res = this.notes.filter(n => n.id !== id)
  this.notes = [... res]
  this.copyNotes = [...this.notes]
 }

 handleSearch(data: any){
  const _n = data.target.value
  console.log(_n)

  if(_n === ''){
    this.copyNotes = [... this.notes]
    return
  }

  const results = this.notes.filter( n => {
    const title = n.title.toLowerCase()
    const text = n.text.toLowerCase()

    return (title.indexOf(_n) > -1 || text.indexOf(_n) > -1)
  })

  this.copyNotes = [...results]
 }
 
}
