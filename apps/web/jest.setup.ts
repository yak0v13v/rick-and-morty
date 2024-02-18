import { mockServer } from "./src/shared/api/mocks/mockServer";

beforeAll(() => mockServer.listen());
afterEach(() => mockServer.resetHandlers());
afterAll(() => mockServer.close());
