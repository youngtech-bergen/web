# YoungTech Bergen 👨‍💻

## 👉 Get Started

Install dependencies

```bash
yarn
```

Run the development server

```bash
yarn next
```

When the above command completes you'll be able to view your website at `http://localhost:3000`.

To use serverless functions at `/api`, run a now server:

```bash
now dev
```

To use a local database for mocking events, [install MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/):

```bash
brew tap mongodb/brew

# use the latest version
brew install mongodb-community@4.2
brew services start mongodb-community@4.2
```

There's some environment variables that need to be set, ([@arnemolland](https://github.com/arnemolland) is working on default dev environments, use local/own environments until then):

```properties
mailchimp_list_id=(MAILCHIMP AUDIENCE LIST ID)
mailchimp_api_key=(MAILCHIMP API KEY)
mongo_uri_dev=mongodb://localhost/test
```

On your local MongoDB instance, you can import mock data from `mock.json`:

```bash
mongoimport --db test --collection events --file mock.json
```

## 🥞 Stack

This project uses the following libraries and services:

- Framework - [Next.js](https://nextjs.org)
- Hosting - [ZEIT Now](https://zeit.co)
