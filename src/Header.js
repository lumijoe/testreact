import React from 'react';

export default function Header() {
    return (
        <div class="w-[100%] h-[120px] bg-[#232323] text-white flex flex-row justify-between px-8 items-center">
            <div class="text-5xl">React App</div>
            <nav class="">
                <ul class="flex flex-row gap-[10px]">        
                    <li class="rounded-full bg-pink-500 py-2 px-4">
                        <a href="./" target="_blank" rel="noopener noreferrer">資料請求</a></li>
                    <li class="rounded-full bg-orange-500 py-2 px-4">
                        <a href="./" target="_blank" rel="noopener noreferrer">お問い合わせ</a></li> 
                </ul>
                <ul class="flex flex-row gap-[20px] justify-between">
                    <li><a href="#ch1" class="">ch1</a></li>
                    <li><a href="#ch2" class="">ch2</a></li>
                    <li><a href="#ch3" class="">ch3</a></li>
                    <li><a href="#ch4" class="">ch4</a></li>
                </ul>
            </nav>
        </div>
    )

}