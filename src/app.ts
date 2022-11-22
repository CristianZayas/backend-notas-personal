import server from './server/server';

const loaderServer = async () => {
  await server.listen(5000, () => {
    return console.log(`server is listening on 5000`);
  });
}

loaderServer()