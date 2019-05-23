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
  // Check if it's empty first:
  if (question) {
    // If the question data is an array:
    if (Array.isArray(question) == true) {
      let questionMap = question.map((questionPost, index) => {
        return {
          node: {
            id: questionPost.node.id ? questionPost.node.id : '',
            slug: questionPost.node.uid ? questionPost.node.uid : '',
            date: questionPost.node.data.date
              ? questionPost.node.data.date
              : '',
            author: questionPost.node.data.author
              ? questionPost.node.data.author.document[0].data.name.text
              : 'Sierra Well',
            coverImage: questionPost.node.data.cover_image.localFile
              ? questionPost.node.data.cover_image.localFile.childImageSharp
                  .fluid
              : false,
            title: questionPost.node.data.title.text
              ? questionPost.node.data.title.text
              : '',
            category: questionPost.node.data.category
              ? questionPost.node.data.category.uid
              : '',
            tags: questionPost.node.tags ? questionPost.node.tags : '',
            shortAnswer: questionPost.node.data.short_answer
              ? questionPost.node.data.short_answer
              : '',
            longAnswer: questionPost.node.data.long_answer
              ? questionPost.node.data.long_answer
              : '',
          },
        };
        // return console.log(questionPost)
      });

      return questionMap;
    }

    // If it's not an array:
    else {
      let questionMap = {
        id: question.id ? question.id : '',
        slug: question.uid ? question.uid : '',
        date: question.data.date ? question.data.date : '',
        author: question.data.author
          ? question.data.author.document[0].data.name.text
          : 'Sierra Well',
        coverImage: question.data.cover_image.localFile
          ? question.data.cover_image.localFile.childImageSharp.fluid
          : false,
        title: question.data.title.text ? question.data.title.text : '',
        category: question.data.category ? question.data.category.uid : '',
        tags: question.tags ? question.tags : '',
        shortAnswer: question.data.short_answer
          ? question.data.short_answer
          : '',
        longAnswer: question.data.long_answer ? question.data.long_answer : '',
      };

      return questionMap;
    }
  }

  // If the question data doesn't exist
  else {
    return 'No data supplied.';
  }
};

//////////////////////////////////////////////////////////////////////
// End Component
