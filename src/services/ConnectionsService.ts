import { getCustomRepository, Repository } from "typeorm";
import { Connection } from "../entities/Connection";
import { ConnectionsRepository } from "../repositories/ConnectionsRepository";

interface IConnectionCreate {
  socket_id: string;
  user_id: string,
  admin_id?: string,
  id?: string
}

class ConnectionsService {

  private connectiosRepository: Repository<Connection>;

  constructor () {
    this.connectiosRepository = getCustomRepository(ConnectionsRepository);
  }

  async create({ socket_id, user_id, admin_id, id}: IConnectionCreate) {
    const connection = this.connectiosRepository.create({
      socket_id,
      user_id,
      admin_id,
      id
    });

    await this.connectiosRepository.save(connection);

    return connection;
  }

  async findByUserId(user_id: string) {
    const connection = await this.connectiosRepository.findOne({
      user_id
    });

    return connection;
  }
}

export { ConnectionsService };