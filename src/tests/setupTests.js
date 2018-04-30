import Enzym from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DotEnv from 'dotenv';

Enzym.configure({
    adapter: new Adapter()
});

DotEnv.config({
    path: '.env.test'
});