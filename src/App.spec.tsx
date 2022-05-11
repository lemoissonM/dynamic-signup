import React from 'react';
import { mount } from '@cypress/react';
import { App } from "./App";
import signupConfig from "./config/signup.json";

describe('App', () => {
    it('renders signup with fields and button', () => {
        mount(<App />);
        cy.contains('Signup');
        cy.get('form').within(() => {
          cy.get('input').should('have.length', 7);
          cy.get('button').should('have.length', 2);
          cy.get('button').should('contain', 'login.continue');
        });
      });

      it('should show error message when field does not meet validation requirement', () => {
        mount(<App />);
        cy.get('form').within(() => {
          const btn = cy.get('button').eq(0);
          btn.click({ force: true });
          cy.contains(signupConfig.validation.config.errMessages.email.required);
          cy.contains(signupConfig.validation.config.errMessages.firstName.required);
          cy.get('input').eq(2).type('test');
          cy.contains(signupConfig.validation.config.errMessages.email.format);
        })
      });
    
      it('fill signup fields and go to next signup screen', () => {
        mount(<App />);
        cy.get('form').eq(0).within(() => {
          cy.get('input').eq(0).type('lemoisson', { force: true });
          cy.get('input').eq(1).type('lemoisson', { force: true });
          cy.get('input').eq(2).type('lemoisson@gmail.com', { force: true });
          cy.get('input').eq(3).type('1234@@MM', { force: true });
          cy.get('input').eq(4).check({ force: true });
          cy.get('button').eq(0).click({ force: true });
        })
        cy.get('form').eq(0).should('have.css', 'display', 'none');

        cy.get('form').eq(1).within(() => {
          cy.contains('back');
          cy.get('input').eq(0).type('Bukavu', { force: true });
          cy.get('input').eq(1).type('2009-12-12', { force: true });
          cy.get('select').eq(0).select('M', { force: true });
        })
      });

      it('should render config file based on the provided name', () => {
        mount(<App configFileName="signup.single.section" />);
        cy.get('form').eq(0).within(() => {
          cy.get('input').eq(0).type('lemoisson', { force: true });
          cy.get('input').eq(1).type('lemoisson', { force: true });
          cy.get('input').eq(2).type('lemoisson@gmail.com', { force: true });
          cy.get('input').eq(3).type('1234@@MM', { force: true });
          cy.get('input').eq(4).check({ force: true });
          cy.get('button').eq(0).click({ force: true });
          cy.get('input').should('have.length', '5');
        })

        cy.get('form').should('have.length', '1');
      });

      it('Should show an error message when config file provided does not exist', () => {
        mount(<App configFileName="signup.single.section.not.exist" />);
        cy.contains('Could not load config file, please check your config file name');
      })
});
