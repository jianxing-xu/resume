
type O = {
	a: string;
	b: string;
	c: string;
}
type O2 = Pick<O, 'a'> & Pick<O, 'b'>

type O3 = Required<Partial<O2>>


