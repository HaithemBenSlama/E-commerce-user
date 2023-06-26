"use client";
import React from "react";
import Center from "./Center";
import styled from "styled-components";
import { macbook } from "@/public/assets/images";
import Image from "next/image";
import PrimaryBtn from "./PrimaryBtn";
import { FaCartPlus } from "react-icons/fa";

const Bg = styled.div`
  background-color: #222;
  color: #fff;
  padding: 50px 0;
`;
const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 1.5rem;
  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }
`;
const Desc = styled.p`
  color: #aaa;
  font-size: 0.8rem;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  img {
    max-width: 100%;
    display: block;
    margin: 0 auto;
  }
  div:nth-child(1) {
    order: 2;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 1.1fr 0.9fr;
    div:nth-child(1) {
      order: 0;
    }
    img {
      max-width: 100%;
    }
  }
`;
const Column = styled.div`
  display: flex;
  align-items: center;
`;

const Featured = () => {
  return (
    <Bg>
      <Center>
        <Wrapper>
          <Column>
            <div className="mx-auto">
              <Title>MacBook Air 15"</Title>
              <Desc>
                The new 15‑inch MacBook Air makes room for more of what you love
                with a spacious Liquid Retina display. And with the 13‑inch
                model, you have more reasons than ever to choose Air.
                Supercharged by the M2 chip — and with up to 18 hours of battery
                life1 — both laptops deliver blazing-fast performance in an
                ultraportable design.
              </Desc>
              <div className="mt-7 flex">
                <button
                  type="button"
                  className="text-white border border-white bg-transparent hover:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-4 mb-2"
                >
                  Read more
                </button>
                <button
                  type="button"
                  className="flex items-center text-black bg-slate-100 hover:bg-slate-200 focus:outline-none focus:ring-1 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                >
                  <span className="mr-2">
                    <FaCartPlus />
                  </span>
                  Add to cart
                </button>
              </div>
            </div>
          </Column>
          <Column>
            <Image src={macbook} alt="product_image" />
          </Column>
        </Wrapper>
      </Center>
    </Bg>
  );
};

export default Featured;
