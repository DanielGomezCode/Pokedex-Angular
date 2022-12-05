import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit{
    
  constructor() { }

  ngOnInit(): void {
    var btnOne = document.getElementsByClassName('btn-header')[0]
  var btnTwo = document.getElementsByClassName('btn-close')[0]
  var sidebar = document.getElementsByClassName('navegador')[0]

  btnOne.addEventListener('click', function(){
      sidebar.classList.add('active')
  })
  
  btnTwo.addEventListener('click', function(){
      sidebar.classList.remove('active')
  })
  }

}

