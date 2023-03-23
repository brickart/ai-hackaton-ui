import { APIResponse } from "./response";


export const mock: APIResponse = {
  serviceDescription:
    'This service is a RESTful API that provides functionality for managing user profiles, articles, comments, and tags. It allows users to create, read, update, and delete their profiles, articles, and tags. Users can also add comments to articles and favorite articles. The API provides endpoints for retrieving all articles, retrieving a specific article by ID, creating a new article, updating an existing article, and deleting an article. Similarly, the API provides endpoints for retrieving all tags, retrieving a specific tag by ID, creating a new tag, updating an existing tag, and deleting a tag. The API also provides a greeting endpoint that returns a greeting message.',
  controllersDescriptions: [
    [
      {
        controllerName: 'UserController',
        controllerDescription:
          'This controller manages user related api endpoints.',
        endpoints: [
          {
            method: 'GET',
            uri: 'user',
            description: "Returns user's details.",
            httpCode: 200,
          },
          {
            method: 'PUT',
            uri: 'user',
            description: "Updates user's details.",
            httpCode: 200,
          },
          {
            method: 'POST',
            uri: 'users',
            description: 'Creates a new user.',
            httpCode: 201,
          },
          {
            method: 'DELETE',
            uri: 'users/:slug',
            description: 'Deletes a user with the given slug.',
            httpCode: 200,
          },
          {
            method: 'POST',
            uri: 'users/login',
            description: 'Performs user login.',
            httpCode: 200,
          },
        ],
      },
    ],
    [
      {
        controllerName: 'BaseController',
        controllerDescription:
          'Class defining a base controller with a method to extract user ID from JWT token passed in the authorization header.',
        endpoints: [
          {
            method: 'N/A',
            uri: 'N/A',
            description: 'N/A',
            httpCode: 'N/A',
          },
        ],
      },
    ],
    [
      {
        controllerName: 'ProfileController',
        controllerDescription:
          'Controller for managing user profiles and follow functionality',
        endpoints: [
          {
            method: 'GET',
            uri: '/profiles/:username',
            description: "Get a user's profile by username",
            httpCode: 200,
          },
          {
            method: 'POST',
            uri: '/profiles/:username/follow',
            description: 'Follow a user by username',
            httpCode: 200,
          },
          {
            method: 'DELETE',
            uri: '/profiles/:username/follow',
            description: 'Unfollow a user by username',
            httpCode: 200,
          },
        ],
      },
    ],
    [
      {
        controllerName: 'AppController',
        controllerDescription:
          'This is the main controller for the application.',
        endpoints: [
          {
            method: 'GET',
            uri: '/',
            description:
              "This endpoint returns a string message 'Hello World!'",
            httpCode: 200,
          },
        ],
      },
    ],
    [
      {
        controllerName: 'ArticleController',
        controllerDescription:
          'Controller for handling CRUD operations for articles, as well as handling favoriting and unfavoriting of articles',
        endpoints: [
          {
            method: 'GET',
            uri: '/articles',
            description: 'Get all articles',
            httpCode: 200,
          },
          {
            method: 'GET',
            uri: '/articles/feed',
            description: 'Get article feed',
            httpCode: 200,
            additionalHttpCode: 403,
          },
          {
            method: 'GET',
            uri: '/articles/{slug}',
            description: 'Get a single article by its slug',
            httpCode: 200,
          },
          {
            method: 'GET',
            uri: '/articles/{slug}/comments',
            description: 'Get all comments for an article by its slug',
            httpCode: 200,
          },
          {
            method: 'POST',
            uri: '/articles',
            description: 'Create a new article',
            httpCode: 201,
            additionalHttpCode: 403,
          },
          {
            method: 'PUT',
            uri: '/articles/{slug}',
            description: 'Update an existing article',
            httpCode: 201,
            additionalHttpCode: 403,
          },
          {
            method: 'DELETE',
            uri: '/articles/{slug}',
            description: 'Delete an article by its slug',
            httpCode: 201,
            additionalHttpCode: 403,
          },
          {
            method: 'POST',
            uri: '/articles/{slug}/comments',
            description: 'Create a new comment for an article by its slug',
            httpCode: 201,
            additionalHttpCode: 403,
          },
          {
            method: 'DELETE',
            uri: '/articles/{slug}/comments/{id}',
            description:
              'Delete a comment on an article by its slug and comment id',
            httpCode: 201,
            additionalHttpCode: 403,
          },
          {
            method: 'POST',
            uri: '/articles/{slug}/favorite',
            description: 'Favorite an article by its slug',
            httpCode: 201,
            additionalHttpCode: 403,
          },
          {
            method: 'DELETE',
            uri: '/articles/{slug}/favorite',
            description: 'Unfavorite an article by its slug',
            httpCode: 201,
            additionalHttpCode: 403,
          },
        ],
      },
    ],
    [
      {
        controllerName: 'TagController',
        controllerDescription:
          'This controller handles all operations related to tags in the application',
        endpoints: [
          {
            method: 'GET',
            uri: '/tags',
            description: 'Retrieves all tags',
            httpCode: 200,
          },
        ],
      },
    ],
  ],
};