import express from 'express';
import { Kafka } from 'kafkajs';
import routes from './routes';

const app = express();

const kafka = new Kafka({
	clientId: 'api-producer',
	brokers: ['kafka:9092']
});

// Disponibiliza o producer para todas as rotas
app.use((req, res, next) => {
	req.producer = producer;
	return next;
});

app.use(routes);

const producer = kafka.producer();

async function run() {
	// await producer.connect();
	app.listen(3333);
}

run().catch(console.error);