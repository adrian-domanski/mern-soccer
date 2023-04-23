import tw, { styled } from 'twin.macro';

export const Wrapper = tw.div`mt-10 max-w-4xl mx-auto pb-8`;

export const TableHeader = tw.div`px-4`;

export const HeaderTitle = tw.h2`mb-3 text-lg font-semibold leading-6 text-gray-900`;

export const HeaderSubtitle = tw.p`mt-1 max-w-2xl text-sm leading-6 text-gray-500`;

export const TableBody = tw.div`mt-6 border-t border-gray-100`;

export const Dl = tw.dl`divide-y divide-gray-100`;

export const ListElement = tw.div`px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 odd:bg-slate-50`;

export const Dt = tw.dt`text-sm font-medium leading-6 text-gray-900 sm:mt-px sm:pt-2`;

export const Dd = tw.dt`mt-1 text-sm leading-6 text-gray-700 sm:col-span-2`;

export const CTAWrapper = styled.div`
  button {
    ${tw`w-full lg:w-fit`}
  }
`;
