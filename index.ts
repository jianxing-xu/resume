interface A {
  a: string;
  b: string;
  c: string;
  d: string
}

interface B extends Pick<A, 'a' | 'b' | 'c'> {
  e: string
}
const b: B = {
  a: '123',
  b: 'b',
  c: '123',
  e: '123'
}