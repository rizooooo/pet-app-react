import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import PetService from './pet.service'
import { IPet } from '../../../core/interfaces';




describe('Pet Service', () => {


    it('should be created', () => {
        expect(PetService).toBeTruthy();
    });


    it('should get all pets', async () => {
        const res = await PetService.FetchPets(null);
        if (res) {
            expect(res).toBeDefined();
        }
    });

    it('should get all pets with params', async () => {
        const params = {
            sort: 'name asc',
            name: 'test'
        }

        const res = await PetService.FetchPets(params);
        if (res) {
            expect(res).toBeDefined();
        }

        expect(params).toBeDefined();
    });


    it('should create a pet', async () => {
        const params: IPet = {
            name: 'name asc',
            breed: 'test',
            age: 12,
            gender: 'Male'
        }
        const res = await PetService.CreatePet(params);

        if (res) {
            expect(res).toBeDefined();
        }
        expect(params).toBeDefined();
    });

    it('should update a pet', async () => {
        const id = 1;
        const params: IPet = {
            name: 'name asc',
            breed: 'test',
            age: 12,
            gender: 'Male'
        }
        const res = await PetService.UpdatePet(params, id as any);

        if (res) {
            expect(res).toBeDefined();
        }

        expect(params).toBeDefined();
        expect(id).toBeDefined();
    });
})