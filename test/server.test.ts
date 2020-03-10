import Server from '../src/server';

test('Port is correctly set', () => {
    const server = new Server(3535)
    expect(server.port).toBe(3535);
});