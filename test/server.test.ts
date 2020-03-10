import Server from '../src/server';

test('Port of server if correct', () => {
    const server: Server = new Server(3535);
    expect(server.port).toBe(3535);
});