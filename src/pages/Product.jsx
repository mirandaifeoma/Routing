import React from 'react';
import { MyLink } from '../components/Link';


export const Product = () => {
  return (
    <div>
      <MyLink />
      <div>
        <h1
          style={{
            textAlign: 'center',
            fontSize: '5vmin',
            color: 'cadetblue',
          }}
          className="underline decoration-gray-400 decoration-double"
        >
          Our products
        </h1>
        <section>
          <div class='px-4 py-12 mx-auto max-w-screen-xl sm:px-6 lg:px-8'>
            <div class='grid grid-cols-1 gap-4 lg:grid-cols-4 lg:items-start'>
              <div class='lg:sticky lg:top-4'>
                <details
                  open
                  class='overflow-hidden border border-gray-200 rounded'
                >
                  <summary class='flex items-center justify-between px-5 py-3 bg-gray-100 lg:hidden'>
                    <span class='text-sm font-medium'> Toggle Filters </span>

                    <svg
                      class='w-5 h-5'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M4 6h16M4 12h16M4 18h16'
                      />
                    </svg>
                  </summary>

                  <form class='border-t border-gray-200 lg:border-t-0'>
                    <fieldset>
                      <legend class='block w-full px-5 py-3 text-xs font-medium bg-gray-50'>
                        Type
                      </legend>

                      <div class='px-5 py-6 space-y-2'>
                        <div class='flex items-center'>
                          <input
                            id='toy'
                            type='checkbox'
                            name='type[toy]'
                            class='w-5 h-5 border-gray-300 rounded'
                          />

                          <label for='toy' class='ml-3 text-sm font-medium'>
                            Toy
                          </label>
                        </div>

                        <div class='flex items-center'>
                          <input
                            id='game'
                            type='checkbox'
                            name='type[game]'
                            class='w-5 h-5 border-gray-300 rounded'
                          />

                          <label for='game' class='ml-3 text-sm font-medium'>
                            Game
                          </label>
                        </div>

                        <div class='flex items-center'>
                          <input
                            id='outdoor'
                            type='checkbox'
                            name='type[outdoor]'
                            class='w-5 h-5 border-gray-300 rounded'
                          />

                          <label for='outdoor' class='ml-3 text-sm font-medium'>
                            Outdoor
                          </label>
                        </div>

                        <div class='pt-2'>
                          <button
                            type='button'
                            class='text-xs text-gray-500 underline'
                          >
                            Reset Type
                          </button>
                        </div>
                      </div>
                    </fieldset>

                    <div>
                      <fieldset>
                        <legend class='block w-full px-5 py-3 text-xs font-medium bg-gray-50'>
                          Age
                        </legend>

                        <div class='px-5 py-6 space-y-2'>
                          <div class='flex items-center'>
                            <input
                              id='3+'
                              type='checkbox'
                              name='age[3+]'
                              class='w-5 h-5 border-gray-300 rounded'
                            />

                            <label for='3+' class='ml-3 text-sm font-medium'>
                              3+
                            </label>
                          </div>

                          <div class='flex items-center'>
                            <input
                              id='8+'
                              type='checkbox'
                              name='age[8+]'
                              class='w-5 h-5 border-gray-300 rounded'
                            />

                            <label for='8+' class='ml-3 text-sm font-medium'>
                              8+
                            </label>
                          </div>

                          <div class='flex items-center'>
                            <input
                              id='12+'
                              type='checkbox'
                              name='age[12+]'
                              class='w-5 h-5 border-gray-300 rounded'
                            />

                            <label for='12+' class='ml-3 text-sm font-medium'>
                              12+
                            </label>
                          </div>

                          <div class='flex items-center'>
                            <input
                              id='16+'
                              type='checkbox'
                              name='age[16+]'
                              class='w-5 h-5 border-gray-300 rounded'
                            />

                            <label for='16+' class='ml-3 text-sm font-medium'>
                              16+
                            </label>
                          </div>

                          <div class='pt-2'>
                            <button
                              type='button'
                              class='text-xs text-gray-500 underline'
                            >
                              Reset Age
                            </button>
                          </div>
                        </div>
                      </fieldset>
                    </div>

                    <div class='flex justify-between px-5 py-3 border-t border-gray-200'>
                      <button
                        name='reset'
                        type='button'
                        class='text-xs font-medium text-gray-600 underline rounded'
                      >
                        Reset All
                      </button>

                      <button
                        name='commit'
                        type='button'
                        class='px-5 py-3 text-xs font-medium text-white bg-green-600 rounded'
                      >
                        Apply Filters
                      </button>
                    </div>
                  </form>
                </details>
              </div>

              <div class='lg:col-span-3'>
                <div class='flex items-center justify-between'>
                  <p class='text-sm text-gray-500'>
                    <span class='hidden sm:inline'> Showing </span>6 of 24
                    Products
                  </p>

                  <div class='ml-4'>
                    <label for='SortBy' class='sr-only'>
                      {' '}
                      Sort{' '}
                    </label>

                    <select
                      id='SortBy'
                      name='sort_by'
                      class='text-sm border-gray-100 rounded'
                    >
                      <option readonly>Sort</option>
                      <option value='title-asc'>Title, A-Z</option>
                      <option value='title-desc'>Title, Z-A</option>
                      <option value='price-asc'>Price, Low-High</option>
                      <option value='price-desc'>Price, High-Low</option>
                    </select>
                  </div>
                </div>

                <div class='mt-4 bg-gray-200 border border-gray-200 grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-3'>
                  <a href='#' class='relative block bg-white'>
                    <button
                      type='button'
                      name='wishlist'
                      class='absolute p-2 text-white bg-black rounded-full right-4 top-4'
                    >
                      <svg
                        class='w-4 h-4'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                        ></path>
                      </svg>
                    </button>

                    <img
                      alt='Toy'
                      src='https://images.unsplash.com/photo-1522273500616-6b4757e4c184?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTN8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60'
                      class='object-contain w-full h-56 lg:h-72'
                    />

                    <div class='p-6'>
                      <span class='inline-block px-3 py-1 text-xs font-medium bg-yellow-400'>
                        New
                      </span>

                      <h5 class='mt-4 text-lg font-bold'>Robot Toy</h5>

                      <p class='mt-2 text-sm font-medium text-gray-600'>
                        $14.99
                      </p>

                      <button
                        name='add'
                        type='button'
                        class='flex items-center justify-center w-full px-8 py-4 mt-4 bg-yellow-500 rounded-sm'
                      >
                        <span class='text-sm font-medium'> Add to Cart </span>

                        <svg
                          class='w-5 h-5 ml-1.5'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
                          />
                        </svg>
                      </button>
                    </div>
                  </a>

                  <a href='#' class='relative block bg-white'>
                    <button
                      type='button'
                      name='wishlist'
                      class='absolute p-2 text-white bg-black rounded-full right-4 top-4'
                    >
                      <svg
                        class='w-4 h-4'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                        ></path>
                      </svg>
                    </button>

                    <img
                      alt='Toy'
                      src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'
                      class='object-contain w-full h-56 lg:h-72'
                    />

                    <div class='p-6'>
                      <span class='inline-block px-3 py-1 text-xs font-medium bg-yellow-400'>
                        New
                      </span>

                      <h5 class='mt-4 text-lg font-bold'>Robot Toy</h5>

                      <p class='mt-2 text-sm font-medium text-gray-600'>
                        $14.99
                      </p>

                      <button
                        name='add'
                        type='button'
                        class='flex items-center justify-center w-full px-8 py-4 mt-4 bg-yellow-500 rounded-sm'
                      >
                        <span class='text-sm font-medium'> Add to Cart </span>

                        <svg
                          class='w-5 h-5 ml-1.5'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
                          />
                        </svg>
                      </button>
                    </div>
                  </a>

                  <a href='#' class='relative block bg-white'>
                    <button
                      type='button'
                      name='wishlist'
                      class='absolute p-2 text-white bg-black rounded-full right-4 top-4'
                    >
                      <svg
                        class='w-4 h-4'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                        ></path>
                      </svg>
                    </button>

                    <img
                      alt='Toy'
                      src='https://images.unsplash.com/photo-1659535844436-64344882b939?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'
                      class='object-contain w-full h-56 lg:h-72'
                    />

                    <div class='p-6'>
                      <span class='inline-block px-3 py-1 text-xs font-medium bg-yellow-400'>
                        New
                      </span>

                      <h5 class='mt-4 text-lg font-bold'>Robot Toy</h5>

                      <p class='mt-2 text-sm font-medium text-gray-600'>
                        $14.99
                      </p>

                      <button
                        name='add'
                        type='button'
                        class='flex items-center justify-center w-full px-8 py-4 mt-4 bg-yellow-500 rounded-sm'
                      >
                        <span class='text-sm font-medium'> Add to Cart </span>

                        <svg
                          class='w-5 h-5 ml-1.5'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
                          />
                        </svg>
                      </button>
                    </div>
                  </a>

                  <a href='#' class='relative block bg-white'>
                    <button
                      type='button'
                      name='wishlist'
                      class='absolute p-2 text-white bg-black rounded-full right-4 top-4'
                    >
                      <svg
                        class='w-4 h-4'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                        ></path>
                      </svg>
                    </button>

                    <img
                      alt='Toy'
                      src='https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'
                      class='object-contain w-full h-56 lg:h-72'
                    />

                    <div class='p-6'>
                      <span class='inline-block px-3 py-1 text-xs font-medium bg-yellow-400'>
                        New
                      </span>

                      <h5 class='mt-4 text-lg font-bold'>Robot Toy</h5>

                      <p class='mt-2 text-sm font-medium text-gray-600'>
                        $14.99
                      </p>

                      <button
                        name='add'
                        type='button'
                        class='flex items-center justify-center w-full px-8 py-4 mt-4 bg-yellow-500 rounded-sm'
                      >
                        <span class='text-sm font-medium'> Add to Cart </span>

                        <svg
                          class='w-5 h-5 ml-1.5'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
                          />
                        </svg>
                      </button>
                    </div>
                  </a>

                  <a href='#' class='relative block bg-white'>
                    <button
                      type='button'
                      name='wishlist'
                      class='absolute p-2 text-white bg-black rounded-full right-4 top-4'
                    >
                      <svg
                        class='w-4 h-4'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                        ></path>
                      </svg>
                    </button>

                    <img
                      alt='Toy'
                      src='https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
                      class='object-contain w-full h-56 lg:h-72'
                    />

                    <div class='p-6'>
                      <span class='inline-block px-3 py-1 text-xs font-medium bg-yellow-400'>
                        New
                      </span>

                      <h5 class='mt-4 text-lg font-bold'>Robot Toy</h5>

                      <p class='mt-2 text-sm font-medium text-gray-600'>
                        $14.99
                      </p>

                      <button
                        name='add'
                        type='button'
                        class='flex items-center justify-center w-full px-8 py-4 mt-4 bg-yellow-500 rounded-sm'
                      >
                        <span class='text-sm font-medium'> Add to Cart </span>

                        <svg
                          class='w-5 h-5 ml-1.5'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
                          />
                        </svg>
                      </button>
                    </div>
                  </a>
                  <a href='#' class='relative block bg-white'>
                    <button
                      type='button'
                      name='wishlist'
                      class='absolute p-2 text-white bg-black rounded-full right-4 top-4'
                    >
                      <svg
                        class='w-4 h-4'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                        ></path>
                      </svg>
                    </button>

                    <img
                      alt='Toy'
                      src='https://images.unsplash.com/photo-1598460880248-71ec6d2d582b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
                      class='object-contain w-full h-56 lg:h-72'
                    />

                    <div class='p-6'>
                      <span class='inline-block px-3 py-1 text-xs font-medium bg-yellow-400'>
                        New
                      </span>

                      <h5 class='mt-4 text-lg font-bold'>Robot Toy</h5>

                      <p class='mt-2 text-sm font-medium text-gray-600'>
                        $14.99
                      </p>

                      <button
                        name='add'
                        type='button'
                        class='flex items-center justify-center w-full px-8 py-4 mt-4 bg-yellow-500 rounded-sm'
                      >
                        <span class='text-sm font-medium'> Add to Cart </span>

                        <svg
                          class='w-5 h-5 ml-1.5'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
                          />
                        </svg>
                      </button>
                    </div>
                  </a>
                  <a href='#' class='relative block bg-white'>
                    <button
                      type='button'
                      name='wishlist'
                      class='absolute p-2 text-white bg-black rounded-full right-4 top-4'
                    >
                      <svg
                        class='w-4 h-4'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                        ></path>
                      </svg>
                    </button>

                    <img
                      alt='Toy'
                      src='https://images.unsplash.com/photo-1611536326696-b52be8ef45f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
                      class='object-contain w-full h-56 lg:h-72'
                    />

                    <div class='p-6'>
                      <span class='inline-block px-3 py-1 text-xs font-medium bg-yellow-400'>
                        New
                      </span>

                      <h5 class='mt-4 text-lg font-bold'>Robot Toy</h5>

                      <p class='mt-2 text-sm font-medium text-gray-600'>
                        $14.99
                      </p>

                      <button
                        name='add'
                        type='button'
                        class='flex items-center justify-center w-full px-8 py-4 mt-4 bg-yellow-500 rounded-sm'
                      >
                        <span class='text-sm font-medium'> Add to Cart </span>

                        <svg
                          class='w-5 h-5 ml-1.5'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
                          />
                        </svg>
                      </button>
                    </div>
                  </a>
                  <a href='#' class='relative block bg-white'>
                    <button
                      type='button'
                      name='wishlist'
                      class='absolute p-2 text-white bg-black rounded-full right-4 top-4'
                    >
                      <svg
                        class='w-4 h-4'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                        ></path>
                      </svg>
                    </button>

                    <img
                      alt='Toy'
                      src='https://images.unsplash.com/photo-1545127398-14699f92334b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
                      class='object-contain w-full h-56 lg:h-72'
                    />

                    <div class='p-6'>
                      <span class='inline-block px-3 py-1 text-xs font-medium bg-yellow-400'>
                        New
                      </span>

                      <h5 class='mt-4 text-lg font-bold'>Robot Toy</h5>

                      <p class='mt-2 text-sm font-medium text-gray-600'>
                        $14.99
                      </p>

                      <button
                        name='add'
                        type='button'
                        class='flex items-center justify-center w-full px-8 py-4 mt-4 bg-yellow-500 rounded-sm'
                      >
                        <span class='text-sm font-medium'> Add to Cart </span>

                        <svg
                          class='w-5 h-5 ml-1.5'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
                          />
                        </svg>
                      </button>
                    </div>
                  </a>
                  <a href='#' class='relative block bg-white'>
                    <button
                      type='button'
                      name='wishlist'
                      class='absolute p-2 text-white bg-black rounded-full right-4 top-4'
                    >
                      <svg
                        class='w-4 h-4'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                        ></path>
                      </svg>
                    </button>

                    <img
                      alt='Toy'
                      src='https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
                      class='object-contain w-full h-56 lg:h-72'
                    />

                    <div class='p-6'>
                      <span class='inline-block px-3 py-1 text-xs font-medium bg-yellow-400'>
                        New
                      </span>

                      <h5 class='mt-4 text-lg font-bold'>Robot Toy</h5>

                      <p class='mt-2 text-sm font-medium text-gray-600'>
                        $14.99
                      </p>

                      <button
                        name='add'
                        type='button'
                        class='flex items-center justify-center w-full px-8 py-4 mt-4 bg-yellow-500 rounded-sm'
                      >
                        <span class='text-sm font-medium'> Add to Cart </span>

                        <svg
                          class='w-5 h-5 ml-1.5'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
                          />
                        </svg>
                      </button>
                    </div>
                  </a>
                  <a href='#' class='relative block bg-white'>
                    <button
                      type='button'
                      name='wishlist'
                      class='absolute p-2 text-white bg-black rounded-full right-4 top-4'
                    >
                      <svg
                        class='w-4 h-4'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                        ></path>
                      </svg>
                    </button>

                    <img
                      alt='Toy'
                      src='https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
                      class='object-contain w-full h-56 lg:h-72'
                    />

                    <div class='p-6'>
                      <span class='inline-block px-3 py-1 text-xs font-medium bg-yellow-400'>
                        New
                      </span>

                      <h5 class='mt-4 text-lg font-bold'>Robot Toy</h5>

                      <p class='mt-2 text-sm font-medium text-gray-600'>
                        $14.99
                      </p>

                      <button
                        name='add'
                        type='button'
                        class='flex items-center justify-center w-full px-8 py-4 mt-4 bg-yellow-500 rounded-sm'
                      >
                        <span class='text-sm font-medium'> Add to Cart </span>

                        <svg
                          class='w-5 h-5 ml-1.5'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
                          />
                        </svg>
                      </button>
                    </div>
                  </a>
                  <a href='#' class='relative block bg-white'>
                    <button
                      type='button'
                      name='wishlist'
                      class='absolute p-2 text-white bg-black rounded-full right-4 top-4'
                    >
                      <svg
                        class='w-4 h-4'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                        ></path>
                      </svg>
                    </button>

                    <img
                      alt='Toy'
                      src='https://images.unsplash.com/photo-1511556820780-d912e42b4980?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
                      class='object-contain w-full h-56 lg:h-72'
                    />

                    <div class='p-6'>
                      <span class='inline-block px-3 py-1 text-xs font-medium bg-yellow-400'>
                        New
                      </span>

                      <h5 class='mt-4 text-lg font-bold'>Robot Toy</h5>

                      <p class='mt-2 text-sm font-medium text-gray-600'>
                        $14.99
                      </p>

                      <button
                        name='add'
                        type='button'
                        class='flex items-center justify-center w-full px-8 py-4 mt-4 bg-yellow-500 rounded-sm'
                      >
                        <span class='text-sm font-medium'> Add to Cart </span>

                        <svg
                          class='w-5 h-5 ml-1.5'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
                          />
                        </svg>
                      </button>
                    </div>
                  </a>
                  <a href='#' class='relative block bg-white'>
                    <button
                      type='button'
                      name='wishlist'
                      class='absolute p-2 text-white bg-black rounded-full right-4 top-4'
                    >
                      <svg
                        class='w-4 h-4'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                        ></path>
                      </svg>
                    </button>

                    <img
                      alt='Toy'
                      src='https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
                      class='object-contain w-full h-56 lg:h-72'
                    />

                    <div class='p-6'>
                      <span class='inline-block px-3 py-1 text-xs font-medium bg-yellow-400'>
                        New
                      </span>

                      <h5 class='mt-4 text-lg font-bold'>Robot Toy</h5>

                      <p class='mt-2 text-sm font-medium text-gray-600'>
                        $14.99
                      </p>

                      <button
                        name='add'
                        type='button'
                        class='flex items-center justify-center w-full px-8 py-4 mt-4 bg-yellow-500 rounded-sm'
                      >
                        <span class='text-sm font-medium'> Add to Cart </span>

                        <svg
                          class='w-5 h-5 ml-1.5'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
                          />
                        </svg>
                      </button>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div>
        <div className='w-96 m-auto flex items-center my-4'> 
          <div className=' w-60 d-inline-block'>
            <span className='box-decoration-slice hover:box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white py-2 text-xl'>
              HOUSES <br />
              ON ROCK
            </span>
          </div>
          <div className='w-60 d-inline-block'>
            <span className='box-decoration-clone hover:box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 py-2 text-white text-xl'>
              BUILD <br />
              AN EMPIRE
            </span>
          </div>
        </div>
        <div className='columns-[15rem] hover:coloums-2'>
          <img
            src='https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041__480.jpg'
            alt='house'
            className='w-full aspect-video '
          />
          <img
            src='https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287__480.jpg'
            alt='house'
            className='w-full aspect-square  my-2'
          />
          <img
            src='https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__480.jpg'
            alt='house'
            className='w-full aspect-video  my-2'
          />
          <img
            src='https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923__480.jpg'
            alt='house'
            className='w-full aspect-square  my-2'
          />
          <img
            src='https://cdn.pixabay.com/photo/2017/03/30/04/14/house-2187170__480.jpg'
            alt='house'
            className='w-full aspect-video  my-2'
          />
          <img
            src='https://cdn.pixabay.com/photo/2018/01/31/12/16/architecture-3121009__480.jpg'
            alt='house'
            className='w-full aspect-square  my-2'
          />
          <img
            src='https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041__480.jpg'
            alt='house'
            className='w-full aspect-video  my-2'
          />
          <img
            src='https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287__480.jpg'
            alt='house'
            className='w-full aspect-square  my-2'
          />
          <img
            src='https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187__480.jpg'
            alt='house'
            className='w-full aspect-video  my-2'
          />
          <img
            src='https://cdn.pixabay.com/photo/2017/03/28/12/10/chairs-2181947__480.jpg'
            alt='house'
            className='w-full aspect-square  my-2'
          />
          <img
            src='https://cdn.pixabay.com/photo/2017/07/09/03/19/home-2486092__480.jpg'
            alt='house'
            className='w-full aspect-video  my-2'
          />
          <img
            src='https://cdn.pixabay.com/photo/2014/07/31/00/30/vw-beetle-405876__480.jpg'
            alt='house'
            className='w-full aspect-square  my-2'
          />
          <img
            src='https://cdn.pixabay.com/photo/2020/02/01/22/10/house-4811590__480.jpg'
            alt='house'
            className='w-full aspect-video  my-2'
          />
          <img
            src='https://cdn.pixabay.com/photo/2015/01/28/23/34/mountains-615428__480.jpg'
            alt='house'
            className='w-full aspect-square  my-2'
          />
          <img
            src='https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041__480.jpg'
            alt='house'
            className='w-full aspect-video  my-2'
          />
          <img
            src='https://cdn.pixabay.com/photo/2015/01/28/23/34/mountains-615428__480.jpg'
            alt='house'
            className='w-full aspect-square  my-2'
          />
        </div>
      </div>
    </div>
  )
}

