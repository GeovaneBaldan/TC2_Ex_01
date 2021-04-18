import { Component, OnInit } from '@angular/core';
import { Book } from '../model/Book';

@Component({
	selector: 'app-book',
	templateUrl: './book.component.html',
	styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

	book: Book = {
		title: 'Brasil: Uma Biografia',
		author: 'Lilia Moritz Schwarcz & Heloisa Murgel Starling',
		ISBN: 9788535925661,
		genre: 'História/Américas'
	};

	constructor() { }

	ngOnInit(): void {
	}

}
