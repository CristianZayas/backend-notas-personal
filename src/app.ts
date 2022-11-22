import server from './server/server';

const loaderServer = async () => {
  await server.listen(process.env.PORTS, () => {
    return console.log(`server is listening on ${process.env.PORTS}`);
  });
}

loaderServer()