import * as React from 'react';
import { useState, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Document as PDF, Page, pdfjs } from 'react-pdf';
import { useScrollPosition } from '../../utils/hooks';
import { clamp } from '../../utils/helpers';
import { Direction } from '../../models/models';
import { TabletSize } from '../../models/variables';

import Header from '../../components/Header';
import ContentBlock from '../../components/ContentBlock';
import Footer from '../../components/Footer';
import Link from '../../components/Link';

import { GREEN_200, SPACE_XL, HEADER_HEIGHT, BLUE_400 } from '../../styles/global';
import { Column, Row, Paragraph_1, Heading } from '../../styles/shared';
import { BrochureWrapper, Wrapper, Next, Prev } from './Brochure.styles';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

const Brochure = () => {
  const scrollY = useScrollPosition();
  const headerOffset = HEADER_HEIGHT + SPACE_XL;
  const IsTablet = useMediaQuery({ query: `(max-width: ${TabletSize.max}px)` });

  const direction = IsTablet ? Direction.Column : Direction.Row;
  const columns = IsTablet ? 1 : 2.1;

  const [page, setPage] = useState<number>(1);
  const [maxPages, setMaxPages] = useState<number>(1);
  const wrapper = useRef(null);

  const brochure = __dirname + 'documents/The%20Grove%20Nursery%20%26%20Preschool%20Brochure.pdf';
  const enrollment = __dirname + 'documents/The%20Grove%20Enrolment%20Form.docx';
  const feestructure = __dirname + 'documents/The%20Grove%20Fee%20Structure%202022.pdf';
  const parentcontract = __dirname + 'documents/Parent%20and%20The%20Grove%20Contract.docx';

  const onPageChanged = (direction: number) => {
    setPage(clamp(page + direction, 1, maxPages));
  };

  return (
    <Wrapper id='wrapper'>
      <Header scrollY={scrollY} />
      <ContentBlock paddingTop={headerOffset} paddingBot={SPACE_XL}>
        <Row between direction={direction}>
          <Column columns={columns}>
            <Row>
              <Heading>Download Brochure</Heading>
            </Row>
            <Row>
              <Column>
                <Paragraph_1>You can view and download our brochure below.</Paragraph_1>
                <Link url={brochure}>
                  <Paragraph_1 color={BLUE_400}>Download Brochure</Paragraph_1>
                </Link>
                <br />
                <BrochureWrapper ref={wrapper}>
                  <Prev style={{ opacity: page === 1 ? 0.3 : 1.0 }} onClick={() => onPageChanged(-1)} />
                  <div>
                    <PDF file={brochure} onLoadSuccess={({ numPages }) => setMaxPages(numPages)}>
                      <Page pageNumber={page} width={wrapper.current?.clientWidth ?? 300} />
                    </PDF>
                  </div>
                  <Next style={{ opacity: page === maxPages ? 0.3 : 1.0 }} onClick={() => onPageChanged(1)} />
                </BrochureWrapper>
              </Column>
            </Row>
          </Column>
          <br />
          <br />
          <Column columns={columns}>
            <Row noFlex>
              <Heading>Other Documents</Heading>
            </Row>
            <Row>
              <Column>
                <Paragraph_1>Some other documents you may find useful.</Paragraph_1>
                <br />
                <Link url={feestructure}>
                  <Paragraph_1 color={BLUE_400}>Fee Structure</Paragraph_1>
                </Link>
                <Link url={enrollment}>
                  <Paragraph_1 color={BLUE_400}>Enrolment Form</Paragraph_1>
                </Link>
                <Link url={parentcontract}>
                  <Paragraph_1 color={BLUE_400}>Parent and The Grove Contract</Paragraph_1>
                </Link>
              </Column>
            </Row>
          </Column>
        </Row>
      </ContentBlock>

      <Footer color={GREEN_200} noShadow></Footer>
    </Wrapper>
  );
};

export default Brochure;
