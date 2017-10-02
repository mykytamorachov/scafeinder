import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

describe('AuthService', () => {
  let subject: AuthService = null;
  let backend: MockBackend = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
      ],
      providers: [AuthService, MockBackend, BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backendInstance, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        }, {
        provide: Router, useValue: { navigate: () => {} }
      } ]
    });
  });

  beforeEach(inject([AuthService, MockBackend], (authService: AuthService, mockBackend: MockBackend) => {
    subject = authService;
    backend = mockBackend;
  }));

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));

  it('the token should be created', async() => {
    backend.connections.subscribe((connection: MockConnection) => {
      const options = new ResponseOptions({
        body: JSON.stringify({ token: 'er4yfh2d8sggd5', status: 'success', id: '75sh5d' })
      });
      connection.mockRespond(new Response(options));
      expect(connection.request.headers.get('Content-Type')).toEqual('application/json');
      expect(connection.request.method).toEqual(RequestMethod.Post);
    });

    subject.login({ username: 'admin', password: 'secret' }).subscribe((response) => response);

    expect(localStorage.getItem('id_token')).toEqual('75sh5d');
    expect(localStorage.getItem('access_token')).toEqual('er4yfh2d8sggd5');
  });

  it('should be logined out', async() => {
    subject.logout();

    expect(localStorage.getItem('id_token')).toEqual(null);
    expect(localStorage.getItem('access_token')).toEqual(null);
  });
});
