import { TestBed, inject } from '@angular/core/testing';

import { HistoryNotesService } from './history-notes.service';

describe('HistoryNotesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HistoryNotesService]
    });
  });

  it('should be created', inject([HistoryNotesService], (service: HistoryNotesService) => {
    expect(service).toBeTruthy();
  }));
});
