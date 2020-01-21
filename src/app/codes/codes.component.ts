import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-codes',
  templateUrl: './codes.component.html',
  styleUrls: ['./codes.component.css']
})
export class CodesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  codes = [
    {
      title: 'Angular based Web Projects',
      description: 'Angular is a platform for building mobile and desktop web applications.',
      buttonText: 'View Projects',
      img: '/assets/rezero.jpg'
    },
    {
      title: 'Machine Learning based Projects',
      description: 'Machine learning is an application of artificial intelligence (AI) that provides systems the ability to automatically learn and improve from experience without being explicitly programmed. Machine learning focuses on the development of computer programs that can access data and use it learn for themselves.',
      buttonText: 'View Projects',
      img: '/assets/rezero.jpg'
    },
    {
      title: 'Deep Learning based Projects',
      description: 'Deep learning is a subset of machine learning in artificial intelligence (AI) that has networks capable of learning unsupervised from data that is unstructured or unlabeled. Also known as deep neural learning or deep neural network.',
      buttonText: 'View Projects',
      img: '/assets/rezero.jpg'
    },
    {
      title: 'Natural Language Processing based Projects',
      description: 'Natural language processing (NLP) is a subfield of linguistics, computer science, information engineering, and artificial intelligence concerned with the interactions between computers and human (natural) languages, in particular how to program computers to process and analyze large amounts of natural language data.',
      buttonText: 'View Projects',
      img: '/assets/rezero.jpg'
    },
    {
      title: 'Computer Vision based Projects',
      description: 'Computer vision is an interdisciplinary scientific field that deals with how computers can be made to gain high-level understanding from digital images or videos. From the perspective of engineering, it seeks to automate tasks that the human visual system can do.',
      buttonText: 'View Projects',
      img: '/assets/rezero.jpg'
    },
    {
      title: 'Speech Recognition',
      description: 'Speech recognition is the ability of a machine or program to identify words and phrases in spoken language and convert them to a machine-readable format. Rudimentary speech recognition software has a limited vocabulary of words and phrases, and it may only identify these if they are spoken very clearly.',
      buttonText: 'View Projects',
      img: '/assets/rezero.jpg'
    }

  ];

}
