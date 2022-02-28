import { Injectable } from '@nestjs/common';
import { GetUserRequest } from './get-user-request.dto';

@Injectable()
export class AppService {

  private readonly users: any[] = [
    {
      userId: '123',
      stripeUserId: '982341',
    },
    {
      userId: '345',
      stripeUserId: '34523423',
    },
  ]

  getHello(): string {
    return 'Hello World!';
  }

  getUser(getUserRequest: GetUserRequest) {
    return this.users.find((user) => user.userId === getUserRequest.userId);
  }
}
