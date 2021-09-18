const mint = require('../../util/mint');

describe('mint', () => {
  it('converts number mojo to mint', () => {
    const result = mint.mojo_to_mint(1000000);

    expect(result).toBe(0.000001);
  });
  it('converts string mojo to mint', () => {
    const result = mint.mojo_to_mint('1000000');

    expect(result).toBe(0.000001);
  });
  it('converts number mojo to mint string', () => {
    const result = mint.mojo_to_mint_string(1000000);

    expect(result).toBe('0.000001');
  });
  it('converts string mojo to mint string', () => {
    const result = mint.mojo_to_mint_string('1000000');

    expect(result).toBe('0.000001');
  });
  it('converts number mint to mojo', () => {
    const result = mint.mint_to_mojo(0.000001);

    expect(result).toBe(1000000);
  });
  it('converts string mint to mojo', () => {
    const result = mint.mint_to_mojo('0.000001');

    expect(result).toBe(1000000);
  });
  it('converts number mojo to colouredcoin', () => {
    const result = mint.mojo_to_colouredcoin(1000000);

    expect(result).toBe(1000);
  });
  it('converts string mojo to colouredcoin', () => {
    const result = mint.mojo_to_colouredcoin('1000000');

    expect(result).toBe(1000);
  });
  it('converts number mojo to colouredcoin string', () => {
    const result = mint.mojo_to_colouredcoin_string(1000000);

    expect(result).toBe('1,000');
  });
  it('converts string mojo to colouredcoin string', () => {
    const result = mint.mojo_to_colouredcoin_string('1000000');

    expect(result).toBe('1,000');
  });
  it('converts number colouredcoin to mojo', () => {
    const result = mint.colouredcoin_to_mojo(1000);

    expect(result).toBe(1000000);
  });
  it('converts string colouredcoin to mojo', () => {
    const result = mint.colouredcoin_to_mojo('1000');

    expect(result).toBe(1000000);
  });
});
