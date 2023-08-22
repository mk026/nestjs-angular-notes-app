import { Injectable } from '@nestjs/common';

@Injectable()
export class NoteService {
  getNotes() {
    return 'Get all notes';
  }
}
