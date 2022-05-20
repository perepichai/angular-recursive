import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'recursive';
  arr = [
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

  constructor (
    private renderer: Renderer2,
    private el: ElementRef
    ) {}

  ngOnInit(): void {
    this.walkThroughArray(this.arr);
  }

  walkThroughArray(arr: string | any[]) {
    const ul = this.renderer.createElement('ul');

    for (let i=0; i<arr.length; i++) {
      const li = this.renderer.createElement('li');
      const text = this.renderer.createText(`ID: ${arr[i].id}; Name: ${arr[i].name}`);
      this.renderer.appendChild(li, text);

      if (arr[i].children.length) {
        this.renderer.appendChild(li, this.walkThroughArray(arr[i].children));        
      }
      this.renderer.appendChild(ul, li);
    }
    this.renderer.appendChild(this.el.nativeElement, ul);
    return ul;
}

}

