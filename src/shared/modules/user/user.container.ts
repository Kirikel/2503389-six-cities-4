import { Container } from 'inversify';
import { UserService } from './user-service.interface.js';
import { DefaultUserService } from './default-user.service.js';
import { Component } from '../../types/component.enum.js';
import { UserEntity, UserModel } from './user.entity.js';
import { types } from '@typegoose/typegoose';


export function createUserContainer() {
  const userContainer = new Container();
  userContainer.bind<UserService>(Component.UserService).to(DefaultUserService).inSingletonScope();
  userContainer.bind<types.ModelType<UserEntity>>(Component.UserModel).toConstantValue(UserModel);

  return userContainer;
}
