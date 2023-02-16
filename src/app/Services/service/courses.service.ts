import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  courses = [
    {
      id: 100,
      name: 'Javascript for beginners',
      author: 'John',
      type: 'Free',
      Price: 0.0,
      rating: 3.5,
      image : 'assets/js.png',
      descreption:
        'In this course you will learn the basics of javascript fundamentals and this course is purely designed for beginners',
    },
    {
      id: 101,
      name: 'Angular for beginners',
      author: 'John',
      type: 'Premium',
      Price: 125.0,
      rating: 3.8,
      image : 'assets/angular.png',
      descreption:
        'In this course you will learn the basics of javascript fundamentals and this course is purely designed for beginners',
    },
    {
      id: 102,
      name: 'React for beginners',
      author: 'John',
      type: 'Premium',
      Price: 125.0,
      rating: 3.9,
      image : 'assets/react.png',
      descreption:
        'In this course you will learn the basics of javascript fundamentals and this course is purely designed for beginners',
    },
    {
      id: 103,
      name: 'Pythin for beginners',
      author: 'John',
      type: 'Free',
      Price: 0.0,
      rating: 3.5,
      image : 'assets/python.png',
      descreption:
        'In this course you will learn the basics of javascript fundamentals and this course is purely designed for beginners',
    },
    {
      id: 104,
      name: 'HTML for beginners',
      author: 'John',
      type: 'Free',
      Price: 0.0,
      rating: 3.5,
      image : 'assets/html.png',
      descreption:
        'In this course you will learn the basics of javascript fundamentals and this course is purely designed for beginners',
    },
    {
      id: 105,
      name: 'CSS for beginners',
      author: 'John',
      type: 'Free',
      Price: 0.0,
      rating: 3.5,
      image : 'assets/css.png',
      descreption:
        'In this course you will learn the basics of javascript fundamentals and this course is purely designed for beginners',
    },
    {
      id: 106,
      name: 'Nodejs for beginners',
      author: 'John',
      type: 'Free',
      Price: 110.0,
      rating: 3.5,
      image : 'assets/nodejs.png',
      descreption:
        'In this course you will learn the basics of javascript fundamentals and this course is purely designed for beginners',
    },
    {
      id: 105,
      name: 'JAVA for beginners',
      author: 'John',
      type: 'Premium',
      Price: 145.0,
      rating: 3.5,
      image : 'assets/java.png',
      descreption:
        'In this course you will learn the basics of javascript fundamentals and this course is purely designed for beginners',
    }
  ]
}
