// Transformer:
// This is for taking Prismic data and transforming it into something that
// this component would like to handle. The Transformer is typically used
// in /template/ pages where a GraphQL query from Prismic (or any data) source
// is involved.
//////////////////////////////////////////////////////////////////////

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Function to create our Columns Map
export const questionDataTransformer = question => {
  if (question) {
    let questionMap = {
      id: question.id ? question.id : '',
      slug: question.uid ? question.uid : '',
      date: question.data.date ? question.data.date : '',
      author: question.data.author
        ? question.data.author.document[0].data.name.text
        : 'Sierra Well',
      coverImage: 'placeholder_bg_4.jpg',
      title: question.data.title.text ? question.data.title.text : '',
      category: question.data.category ? question.data.category.uid : '',
      tags: question.tags ? question.tags : '',
      shortAnswer: question.data.short_answer ? question.data.short_answer : '',
      longAnswer: question.data.long_answer ? question.data.long_answer : '',
    };

    return questionMap;
  } else {
    return 'null';
  }
};

//////////////////////////////////////////////////////////////////////
// End Component
