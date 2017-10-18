import parseAmount,{replaceComma} from '../src/parse-amount';
import {Domagic} from '../src/parse-amount';
describe('parseAmount',function(){
  it('should parse integer string', function(){
    expect(parseAmount('100')).toBe(10000);
  });
  it('should parse integer string', function(){
    expect(parseAmount('100.0')).toBe(10000);
  });
  it('should parse comma', function(){
    expect(replaceComma('10,0')).toBe('10.0');
  });

});

describe('Domagic',function(){
  it ('Should make ((()))',function(){
    expect(Domagic('d')).toBe('(')
  });
})
