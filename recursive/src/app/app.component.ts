import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'recursive';
  ngOnInit(): void {
    const arr = [
      {
        id: 1,
        name: 'test1',
        children: [
          {
            id: 2,
            name: 'test2',
            children: [
              {
                id: 3,
                name: 'test3',
                children: [
                  {
                    id: 4,
                    name: 'test4',
                    children: []
                  },
                  {
                    id: 4,
                    name: 'test4',
                    children: [
                      {
                        id: 1,
                        name: 'test1',
                        children: [
                          {
                            id: 2,
                            name: 'test2',
                            children: [
                              {
                                id: 3,
                                name: 'test3',
                                children: [
                                  {
                                    id: 4,
                                    name: 'test4',
                                    children: []
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            id: 4,
                            name: 'test4',
                            children: [
                              {
                                id: 1,
                                name: 'test1',
                                children: [
                                  {
                                    id: 2,
                                    name: 'test2',
                                    children: [
                                      {
                                        id: 3,
                                        name: 'test3',
                                        children: [
                                          {
                                            id: 4,
                                            name: 'test4',
                                            children: []
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 1,
        name: 'test1',
        children: [
          {
            id: 2,
            name: 'test2',
            children: [
              {
                id: 3,
                name: 'test3',
                children: [
                  {
                    id: 4,
                    name: 'test4',
                    children: [
                      {
                        id: 1,
                        name: 'test1',
                        children: [
                          {
                            id: 2,
                            name: 'test2',
                            children: [
                              {
                                id: 3,
                                name: 'test3',
                                children: [
                                  {
                                    id: 4,
                                    name: 'test4',
                                    children: []
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    id: 4,
                    name: 'test4',
                    children: [
                      {
                        id: 1,
                        name: 'test1',
                        children: [
                          {
                            id: 2,
                            name: 'test2',
                            children: [
                              {
                                id: 3,
                                name: 'test3',
                                children: [
                                  {
                                    id: 4,
                                    name: 'test4',
                                    children: []
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            id: 4,
                            name: 'test4',
                            children: [
                              {
                                id: 1,
                                name: 'test1',
                                children: [
                                  {
                                    id: 2,
                                    name: 'test2',
                                    children: [
                                      {
                                        id: 3,
                                        name: 'test3',
                                        children: [
                                          {
                                            id: 4,
                                            name: 'test4',
                                            children: []
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ];
  }
  


}
